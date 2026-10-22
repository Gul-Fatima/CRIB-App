
import { fetchProperty } from '@/api/properties';
import { useQuery } from '@tanstack/react-query';

export function useProperty(id: string) {
  return useQuery({
    queryKey: ['property', id],
    queryFn: () => fetchProperty(id),
    enabled: Boolean(id),
  });
}
