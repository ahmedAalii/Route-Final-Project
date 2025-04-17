import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useProducts() {




    function getProducts() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/products").then(res => res.data.data);
    }

    let productInfo = useQuery({
        queryKey: ["recentProducts"],
        queryFn: getProducts,
        staleTime: 7000,
        retry: 4,
        retryDelay: 2000,

    });

    return productInfo


}
