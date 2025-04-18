import { PaginationType } from '../../components/Pagination';
import APIClient from '../../functions/APIClient';
import { ChannelType } from '../../pages/Channels';
import { ConfigType } from '../../pages/Home';

export type ChannelsListResponse = {
  data: ChannelType[];
  paginate: PaginationType;
  config?: ConfigType;
};

const loadChannelList = async (page: number, showSubscribed: boolean) => {
  const searchParams = new URLSearchParams();

  if (page) searchParams.append('page', page.toString());
  if (showSubscribed) searchParams.append('filter', 'subscribed');

  const endpoint = `/api/channel/${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;

  return APIClient<ChannelsListResponse>(endpoint);
};

export default loadChannelList;
