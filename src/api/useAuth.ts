import { UserType } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Api } from './apiClient';

export const useGetUser = (status: string) => {
  return useQuery({
    queryKey: ['user', status],
    queryFn: async () => {
      const { data } = await Api.get('/user');
      return data;
    },
    staleTime: 1000 * 60, // 1分钟内不重复请求，直接用本地缓存
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UserType) => {
      const { data } = await Api.post('/user', payload);
      return data;
    },
    onSuccess: (_, variables) => {
      // 出价成功后，自动通知 React Query 刷新该缓存
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};
