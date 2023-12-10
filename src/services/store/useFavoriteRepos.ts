import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteRepoStore = {
	favoriteRepoIds: number[];
	addToFavorites: (repoId: number) => void;
	removeFromFavorites: (repoId: number) => void;
}

export const useFavoriteRepoStore = create(persist<FavoriteRepoStore>(
		(set) => ({
			favoriteRepoIds: [],
			addToFavorites: (repoId: number) => {
				set((state) => ({
					favoriteRepoIds: [...state.favoriteRepoIds, repoId]
				}))
			},
			removeFromFavorites: (repoId: number) => {
				set((state) => ({
					favoriteRepoIds: state.favoriteRepoIds.filter(repo => repo !== repoId)
				}))
			}
		})
	, {
		name: 'repo-storage'
	})
)
