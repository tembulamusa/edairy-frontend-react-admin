import { Resource } from 'react-admin';

import { LivestockList } from '../pages/members/livestock/livestock-list';
import { LivestockBreedingRecordsList } from '../pages/members/livestock/livestock-breeding-records-list';
import { LivestockCategoriesList } from '../pages/members/livestock/livestock-categories-list';
import { LivestockBreedsList } from '../pages/members/livestock/livestock-breeds-list';
import { LivestockProductionRecordsList } from '../pages/members/livestock/livestock-production-records-list';
import { LivestockHealthRecordsList } from '../pages/members/livestock/livestock-health-records-list';
import { LivestockDeathsList } from '../pages/members/livestock/livestock-deaths-list';
import { LivestockFeedingsList } from '../pages/members/livestock/livestock-feedings-list';
import { LivestockMovementsList } from '../pages/members/livestock/livestock-movements-list';
import { LivestockPhotosList } from '../pages/members/livestock/livestock-photos-list';
import { LivestockSalesList } from '../pages/members/livestock/livestock-sales-list';
import { LivestockWeightRecordsList } from '../pages/members/livestock/livestock-weight-records-list';




export const livestockResources = [
    <Resource key="livestock" name="livestock" list={LivestockList} />,
    <Resource key="livestock-categories" name="livestock-categories" list={LivestockCategoriesList} />,
    <Resource key="livestock-breeding-records" name="livestock-breeding-records" list={LivestockBreedingRecordsList} />,
    <Resource key="livestock-breeds" name="livestock-breeds" list={LivestockBreedsList} />,
    <Resource key="livestock-health-records" name="livestock-health-records" list={LivestockHealthRecordsList} />,
    <Resource key="livestock-deaths" name="livestock-deaths" list={LivestockDeathsList} />,
    <Resource key="livestock-feedings" name="livestock-feedings" list={LivestockFeedingsList} />,
    <Resource key="livestock-movements" name="livestock-movements" list={LivestockMovementsList} />,
    <Resource key="livestock-photos" name="livestock-photos" list={LivestockPhotosList} />,
    <Resource key="livestock-production-records" name="livestock-production-records" list={LivestockProductionRecordsList} />,
    <Resource key="livestock-sales" name="livestock-sales" list={LivestockSalesList} />,
    <Resource key="livestock-weight-records" name="livestock-weight-records" list={LivestockWeightRecordsList} />,
];