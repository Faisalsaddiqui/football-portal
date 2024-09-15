export const getFilteredPlayersByName = (players, filter) => {
  let filtered = players.filter((player) => {
    if (
      player.first_name.toLowerCase().includes(filter.toLowerCase()) ||
      player.last_name.toLowerCase().includes(filter.toLowerCase())
    )
      return player;
  });

  return filtered;
};

export const getFilteredPlayersByTeam = (players, filter) => {
  let filtered = players.filter((player) => {
    if (player.team.includes(filter)) return player;
  });

  return filtered;
};
