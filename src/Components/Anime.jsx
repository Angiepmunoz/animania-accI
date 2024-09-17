
export default function Anime({anime}) {
  // console.log("props: ",props.anime)
  const {name, description} = anime
  return (
    <tr>
      <td>{anime.name}</td>
      <td>{anime.description}</td>
    </tr>
  );
}
