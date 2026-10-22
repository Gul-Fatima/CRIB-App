// import { fetchProperties } from '@/api/properties';
// import { PAGE_SIZE } from '@/lib/constants';
// import { useInfiniteQuery } from '@tanstack/react-query';

// export function useProperties(
//     city?: string,
//     sortByPrice: boolean = false
// ) {
//     return useInfiniteQuery({
//         queryKey: ['properties', city, sortByPrice],

//         queryFn: ({ pageParam = 0 }) =>
//             fetchProperties({
//                 page: pageParam,
//                 city,
//                 sortByPrice,
//             }),

//         initialPageParam: 0,

//         getNextPageParam: (lastPage, allPages) =>
//             lastPage.length < PAGE_SIZE
//                 ? undefined
//                 : allPages.length,
//     });
// }

import { fetchProperties } from '@/api/properties';
import { PAGE_SIZE } from '@/lib/constants';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useProperties(
  city?: string,
  sort: string = 'none'
) {
  return useInfiniteQuery({
    queryKey: ['properties', city, sort],

    queryFn: ({ pageParam = 0 }) =>
      fetchProperties({
        page: pageParam,
        city,
        sort,
      }),

    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < PAGE_SIZE
        ? undefined
        : allPages.length,
  });
}
