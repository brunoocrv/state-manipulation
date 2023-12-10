import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

import api from "../../services/api";

import { Repo } from "./types";

async function getRepos(context: QueryFunctionContext) {
		const [, userId] = context.queryKey;

    const response = await api.get<Repo[]>(`/users/${userId}/repos`)

    return response.data;
}

export default function useFetchRepos(userId: string) {
    return useQuery({
        queryKey: ["fetch-repos", userId],
        queryFn: getRepos
    })
}
