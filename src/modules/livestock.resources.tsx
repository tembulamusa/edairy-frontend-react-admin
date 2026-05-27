import { Resource } from 'react-admin';

import { LivestockList } from '../pages/members/livestock/livestock-list';
import { LivestockCreate } from '../pages/members/livestock/LivestockCreate';
import { LivestockEdit } from '../pages/members/livestock/LivestockEdit';
import { LivestockShow } from '../pages/members/livestock/LivestockShow';
import { LivestockBreedingRecordsList } from '../pages/members/livestock/livestock-breeding-records-list';
import { LivestockBreedingRecordCreate } from '../pages/members/livestock/LivestockBreedingRecordCreate';
import { LivestockBreedingRecordEdit } from '../pages/members/livestock/LivestockBreedingRecordEdit';
import { LivestockBreedingRecordShow } from '../pages/members/livestock/LivestockBreedingRecordShow';
import { LivestockCategoriesList } from '../pages/members/livestock/livestock-categories-list';
import { LivestockBreedsList } from '../pages/members/livestock/livestock-breeds-list';
import { LivestockBreedCreate } from '../pages/members/livestock/LivestockBreedCreate';
import { LivestockBreedEdit } from '../pages/members/livestock/LivestockBreedEdit';
import { LivestockBreedShow } from '../pages/members/livestock/LivestockBreedShow';
import { LivestockProductionRecordsList } from '../pages/members/livestock/livestock-production-records-list';
import { LivestockProductionRecordCreate } from '../pages/members/livestock/LivestockProductionRecordCreate';
import { LivestockProductionRecordEdit } from '../pages/members/livestock/LivestockProductionRecordEdit';
import { LivestockProductionRecordShow } from '../pages/members/livestock/LivestockProductionRecordShow';
import { LivestockHealthRecordsList } from '../pages/members/livestock/livestock-health-records-list';
import { LivestockHealthRecordCreate } from '../pages/members/livestock/LivestockHealthRecordCreate';
import { LivestockHealthRecordEdit } from '../pages/members/livestock/LivestockHealthRecordEdit';
import { LivestockHealthRecordShow } from '../pages/members/livestock/LivestockHealthRecordShow';
import { LivestockDeathsList } from '../pages/members/livestock/livestock-deaths-list';
import { LivestockDeathCreate } from '../pages/members/livestock/LivestockDeathCreate';
import { LivestockDeathEdit } from '../pages/members/livestock/LivestockDeathEdit';
import { LivestockDeathShow } from '../pages/members/livestock/LivestockDeathShow';
import { LivestockFeedingsList } from '../pages/members/livestock/livestock-feedings-list';
import { LivestockFeedingCreate } from '../pages/members/livestock/LivestockFeedingCreate';
import { LivestockFeedingEdit } from '../pages/members/livestock/LivestockFeedingEdit';
import { LivestockFeedingShow } from '../pages/members/livestock/LivestockFeedingShow';
import { LivestockMovementsList } from '../pages/members/livestock/livestock-movements-list';
import { LivestockMovementCreate } from '../pages/members/livestock/LivestockMovementCreate';
import { LivestockMovementEdit } from '../pages/members/livestock/LivestockMovementEdit';
import { LivestockMovementShow } from '../pages/members/livestock/LivestockMovementShow';
import { LivestockPhotosList } from '../pages/members/livestock/livestock-photos-list';
import { LivestockPhotoCreate } from '../pages/members/livestock/LivestockPhotoCreate';
import { LivestockPhotoEdit } from '../pages/members/livestock/LivestockPhotoEdit';
import { LivestockPhotoShow } from '../pages/members/livestock/LivestockPhotoShow';
import { LivestockSalesList } from '../pages/members/livestock/livestock-sales-list';
import { LivestockSaleCreate } from '../pages/members/livestock/LivestockSaleCreate';
import { LivestockSaleEdit } from '../pages/members/livestock/LivestockSaleEdit';
import { LivestockSaleShow } from '../pages/members/livestock/LivestockSaleShow';
import { LivestockWeightRecordsList } from '../pages/members/livestock/livestock-weight-records-list';
import { LivestockWeightRecordCreate } from '../pages/members/livestock/LivestockWeightRecordCreate';
import { LivestockWeightRecordEdit } from '../pages/members/livestock/LivestockWeightRecordEdit';
import { LivestockWeightRecordShow } from '../pages/members/livestock/LivestockWeightRecordShow';




export const livestockResources = [
    <Resource key="livestocks" name="livestocks" list={LivestockList} create={LivestockCreate} edit={LivestockEdit} show={LivestockShow} />,
    <Resource key="livestock-categories" name="livestock-categories" list={LivestockCategoriesList} />,
    <Resource key="livestock-breeding-records" name="livestock-breeding-records" list={LivestockBreedingRecordsList} create={LivestockBreedingRecordCreate} edit={LivestockBreedingRecordEdit} show={LivestockBreedingRecordShow} />,
    <Resource key="livestock-breeds" name="livestock-breeds" list={LivestockBreedsList} create={LivestockBreedCreate} edit={LivestockBreedEdit} show={LivestockBreedShow} />,
    <Resource key="livestock-health-records" name="livestock-health-records" list={LivestockHealthRecordsList} create={LivestockHealthRecordCreate} edit={LivestockHealthRecordEdit} show={LivestockHealthRecordShow} />,
    <Resource key="livestock-deaths" name="livestock-deaths" list={LivestockDeathsList} create={LivestockDeathCreate} edit={LivestockDeathEdit} show={LivestockDeathShow} />,
    <Resource key="livestock-feedings" name="livestock-feedings" list={LivestockFeedingsList} create={LivestockFeedingCreate} edit={LivestockFeedingEdit} show={LivestockFeedingShow} />,
    <Resource key="livestock-movements" name="livestock-movements" list={LivestockMovementsList} create={LivestockMovementCreate} edit={LivestockMovementEdit} show={LivestockMovementShow} />,
    <Resource key="livestock-photos" name="livestock-photos" list={LivestockPhotosList} create={LivestockPhotoCreate} edit={LivestockPhotoEdit} show={LivestockPhotoShow} />,
    <Resource key="livestock-production-records" name="livestock-production-records" list={LivestockProductionRecordsList} create={LivestockProductionRecordCreate} edit={LivestockProductionRecordEdit} show={LivestockProductionRecordShow} />,
    <Resource key="livestock-sales" name="livestock-sales" list={LivestockSalesList} create={LivestockSaleCreate} edit={LivestockSaleEdit} show={LivestockSaleShow} />,
    <Resource key="livestock-weight-records" name="livestock-weight-records" list={LivestockWeightRecordsList} create={LivestockWeightRecordCreate} edit={LivestockWeightRecordEdit} show={LivestockWeightRecordShow} />,
];