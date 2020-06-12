import {DefaultCrudRepository} from '@loopback/repository';
import {Vechicledetails, VechicledetailsRelations} from '../models';
import {VehDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VechicledetailsRepository extends DefaultCrudRepository<
  Vechicledetails,
  typeof Vechicledetails.prototype.id,
  VechicledetailsRelations
> {
  constructor(
    @inject('datasources.veh') dataSource: VehDataSource,
  ) {
    super(Vechicledetails, dataSource);
  }
}
