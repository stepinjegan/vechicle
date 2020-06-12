import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Vechicledetails} from '../models';
import {VechicledetailsRepository} from '../repositories';

export class VehController {
  constructor(
    @repository(VechicledetailsRepository)
    public vechicledetailsRepository : VechicledetailsRepository,
  ) {}

  @post('/vechicledetails', {
    responses: {
      '200': {
        description: 'Vechicledetails model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vechicledetails)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vechicledetails, {
            title: 'NewVechicledetails',
            exclude: ['id'],
          }),
        },
      },
    })
    vechicledetails: Omit<Vechicledetails, 'id'>,
  ): Promise<Vechicledetails> {
    return this.vechicledetailsRepository.create(vechicledetails);
  }

  @get('/vechicledetails/count', {
    responses: {
      '200': {
        description: 'Vechicledetails model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Vechicledetails) where?: Where<Vechicledetails>,
  ): Promise<Count> {
    return this.vechicledetailsRepository.count(where);
  }

  @get('/vechicledetails', {
    responses: {
      '200': {
        description: 'Array of Vechicledetails model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Vechicledetails, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Vechicledetails) filter?: Filter<Vechicledetails>,
  ): Promise<Vechicledetails[]> {
    return this.vechicledetailsRepository.find(filter);
  }

  @patch('/vechicledetails', {
    responses: {
      '200': {
        description: 'Vechicledetails PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vechicledetails, {partial: true}),
        },
      },
    })
    vechicledetails: Vechicledetails,
    @param.where(Vechicledetails) where?: Where<Vechicledetails>,
  ): Promise<Count> {
    return this.vechicledetailsRepository.updateAll(vechicledetails, where);
  }

  @get('/vechicledetails/{id}', {
    responses: {
      '200': {
        description: 'Vechicledetails model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Vechicledetails, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Vechicledetails, {exclude: 'where'}) filter?: FilterExcludingWhere<Vechicledetails>
  ): Promise<Vechicledetails> {
    return this.vechicledetailsRepository.findById(id, filter);
  }

  @patch('/vechicledetails/{id}', {
    responses: {
      '204': {
        description: 'Vechicledetails PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vechicledetails, {partial: true}),
        },
      },
    })
    vechicledetails: Vechicledetails,
  ): Promise<void> {
    await this.vechicledetailsRepository.updateById(id, vechicledetails);
  }

  @put('/vechicledetails/{id}', {
    responses: {
      '204': {
        description: 'Vechicledetails PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vechicledetails: Vechicledetails,
  ): Promise<void> {
    await this.vechicledetailsRepository.replaceById(id, vechicledetails);
  }

  @del('/vechicledetails/{id}', {
    responses: {
      '204': {
        description: 'Vechicledetails DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vechicledetailsRepository.deleteById(id);
  }
}
