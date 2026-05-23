import { Resource } from 'react-admin';

import { LivestockList } from '../pages/members/livestock/livestock-list';
import { LivestockCreate } from '../pages/members/livestock/LivestockCreate';
import { LivestockEdit } from '../pages/members/livestock/LivestockEdit';
import { LivestockShow } from '../pages/members/livestock/LivestockShow';
import { LivestockBreedingRecordsList } from '../pages/members/livestock/livestock-breeding-records-list';
import { LivestockCategoriesList } from '../pages/members/livestock/livestock-categories-list';
import { LivestockBreedsList } from '../pages/members/livestock/livestock-breeds-list';
import { LivestockBreedCreate } from '../pages/members/livestock/LivestockBreedCreate';
import { LivestockBreedEdit } from '../pages/members/livestock/LivestockBreedEdit';
import { LivestockBreedShow } from '../pages/members/livestock/LivestockBreedShow';
import { LivestockProductionRecordsList } from '../pages/members/livestock/livestock-production-records-list';
import { LivestockHealthRecordsList } from '../pages/members/livestock/livestock-health-records-list';
import { LivestockDeathsList } from '../pages/members/livestock/livestock-deaths-list';
import { LivestockDeathCreate } from '../pages/members/livestock/LivestockDeathCreate';
import { LivestockDeathEdit } from '../pages/members/livestock/LivestockDeathEdit';
import { LivestockDeathShow } from '../pages/members/livestock/LivestockDeathShow';
import { LivestockFeedingsList } from '../pages/members/livestock/livestock-feedings-list';
import { LivestockMovementsList } from '../pages/members/livestock/livestock-movements-list';
import { LivestockMovementCreate } from '../pages/members/livestock/LivestockMovementCreate';
import { LivestockMovementEdit } from '../pages/members/livestock/LivestockMovementEdit';
import { LivestockMovementShow } from '../pages/members/livestock/LivestockMovementShow';
import { LivestockPhotosList } from '../pages/members/livestock/livestock-photos-list';
import { LivestockPhotoCreate } from '../pages/members/livestock/LivestockPhotoCreate';
import { LivestockPhotoEdit } from '../pages/members/livestock/LivestockPhotoEdit';
import { LivestockPhotoShow } from '../pages/members/livestock/LivestockPhotoShow';
import { LivestockSalesList } from '../pages/members/livestock/livestock-sales-list';
import { LivestockWeightRecordsList } from '../pages/members/livestock/livestock-weight-records-list';




export const livestockResources = [
    <Resource key="livestocks" name="livestocks" list={LivestockList} create={LivestockCreate} edit={LivestockEdit} show={LivestockShow} />,
    <Resource key="livestock-categories" name="livestock-categories" list={LivestockCategoriesList} />,
    <Resource key="livestock-breeding-records" name="livestock-breeding-records" list={LivestockBreedingRecordsList} />,
    <Resource key="livestock-breeds" name="livestock-breeds" list={LivestockBreedsList} create={LivestockBreedCreate} edit={LivestockBreedEdit} show={LivestockBreedShow} />,
    <Resource key="livestock-health-records" name="livestock-health-records" list={LivestockHealthRecordsList} />,
    <Resource key="livestock-deaths" name="livestock-deaths" list={LivestockDeathsList} create={LivestockDeathCreate} edit={LivestockDeathEdit} show={LivestockDeathShow} />,
    <Resource key="livestock-feedings" name="livestock-feedings" list={LivestockFeedingsList} />,
    <Resource key="livestock-movements" name="livestock-movements" list={LivestockMovementsList} create={LivestockMovementCreate} edit={LivestockMovementEdit} show={LivestockMovementShow} />,
    <Resource key="livestock-photos" name="livestock-photos" list={LivestockPhotosList} create={LivestockPhotoCreate} edit={LivestockPhotoEdit} show={LivestockPhotoShow} />,
    <Resource key="livestock-production-records" name="livestock-production-records" list={LivestockProductionRecordsList} />,
    <Resource key="livestock-sales" name="livestock-sales" list={LivestockSalesList} />,
    <Resource key="livestock-weight-records" name="livestock-weight-records" list={LivestockWeightRecordsList} />,
];