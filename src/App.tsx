import { useCallback } from "react";

import './App.css'

import { Repo } from "./queries/repo/types"
import useFetchRepos from "./queries/repo"

import { useFavoriteRepoStore } from "./services/store/useFavoriteRepos";

import { Card } from "./components/Card"



function App() {
  const { data } = useFetchRepos("brunoocrv");

	const { favoriteRepoIds, addToFavorites, removeFromFavorites } = useFavoriteRepoStore((state) => state);

	const handleAddFavorites = useCallback((repoId: number) => {
		addToFavorites(repoId);
	}, [addToFavorites]);

	const handleRemoveFromFavorites = useCallback((repoId: number) => {
		removeFromFavorites(repoId);
	}, [removeFromFavorites]);

  return (
    <>
      {
        data?.map((repo: Repo) => (
          <Card
						key={repo.id}
						repo={repo}
						addToFavorites={() => handleAddFavorites(repo.id)}
						removeFromFavorites={() => handleRemoveFromFavorites(repo.id)}
						$isFavorite={favoriteRepoIds.includes(repo.id)}
					/>
        ))
      }
    </>
  )
}

export default App
