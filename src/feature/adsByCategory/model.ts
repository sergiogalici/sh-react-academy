import { AdDto } from '../../api/type'

export type AdsCatState = {
  filteredAds: Record<string, AdDto[]>
}
