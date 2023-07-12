import * as nftController from '../user.controller'
import { NftService } from '../../services/nft.service'

// const mockResponse = () => {}

describe('getById', () => {
  it('should return NFT metadata if successful', async () => {
    const mockReq = {
      params: {
        id: '1',
      },
    }

    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    }

    const mockNftMetadata = {
      id: '1',
      name: 'Test NFT',
      description: 'This is a test NFT',
      image: 'https://test.com/test.png',
      externalUrl: 'https://test.com',
      attributes: [
        {
          trait_type: 'Test',
          value: 'Test',
        },
      ],
    }

    const mockNftService = NftService as jest.MockedClass<typeof NftService>
    mockNftService.prototype.getById.mockResolvedValue(mockNftMetadata)

    await nftController.getById(mockReq as any, mockRes as any)

    expect(mockRes.json).toHaveBeenCalledWith({ data: mockNftMetadata })
  })

  it('should return 500 and error message if something goes wrong', async () => {
    const mockReq = {
      params: {
        id: '1',
      },
    }

    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    }

    const errorMessage = 'Something went wrong'

    const mockNftService = NftService as jest.MockedClass<typeof NftService>
    mockNftService.prototype.getById.mockRejectedValue(new Error(errorMessage))

    await nftController.getById(mockReq as any, mockRes as any)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.send).toHaveBeenCalledWith(errorMessage)
  })
})
