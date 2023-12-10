import { Repo } from "../../queries/repo/types";

import "./styles.css";

type CardType = {
		repo: Repo;
    addToFavorites: (repoId: number) => void;
		removeFromFavorites: (repoId: number) => void;
		$isFavorite: boolean;
}

export function Card({ repo, addToFavorites, removeFromFavorites, $isFavorite }: CardType) {
	function toggleFavoriteRepo() {
		return $isFavorite ? removeFromFavorites(repo.id) : addToFavorites(repo.id);
	}

	return (
		<section className="card">
			<h2>{repo.name}</h2>
				<div className="card-buttons">
					<button onClick={toggleFavoriteRepo}>
						{ $isFavorite ? 'Remover dos Favoritos' : 'Favoritar' }
					</button>
        </div>
    </section>
	)
}
