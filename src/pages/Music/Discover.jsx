import { useDispatch, useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../../redux/services/shazamCore";
import Error from "../../components/Music/Error";
import Loader from "../../components/Music/Loader";
import SongCard from "../../components/Music/SongCard";

const Discover = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();

    // const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    if (isFetching) return <Loader title="Loading songs..." />;

    if (error) return <Error />;

    return (
        <div className="flex flex-col bg-blue-900">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                    Discover
                </h2>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.tracks?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
};
//
export default Discover;
