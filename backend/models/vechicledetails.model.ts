import {Entity, model, property} from '@loopback/repository';

@model()
export class Vechicledetails extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  vechicle_company: string;

  @property({
    type: 'string',
    required: true,
  })
  vechicle_model: string;

  @property({
    type: 'string',
    required: true,
  })
  vechicle_number: string;

  @property({
    type: 'string',
    required: true,
  })
  vechicle_color: string;


  constructor(data?: Partial<Vechicledetails>) {
    super(data);
  }
}

export interface VechicledetailsRelations {
  // describe navigational properties here
}

export type VechicledetailsWithRelations = Vechicledetails & VechicledetailsRelations;
