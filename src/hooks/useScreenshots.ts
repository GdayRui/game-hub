import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["Screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    retry: 0, // set to 0 to reduce api consuming, remove to keep it default value
  });
};

export default useScreenshots;
