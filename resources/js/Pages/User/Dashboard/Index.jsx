import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";
import FeaturedMovies from "@/Components/FeaturedMovies";
import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({auth, featureMovies, movies}) {

    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated user={auth.user}>
            {/* {console.log(auth.user.name)} */}
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px] mb-4" options={flickityOptions}>
                    {featureMovies.map((featureMovie) => (
                        // {/* <!-- Movie Thumbnail --> */}
                        <FeaturedMovies
                            key={featureMovie.id}
                            slug={featureMovie.slug}
                            thumbnail={featureMovie.thumbnail}
                            rating={featureMovie.rating}
                            category={featureMovie.category}
                            name={`${featureMovie.name}`}
                        />
                    ))}
                </Flickity>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4 mt-14">
                        Browse
                    </div>
                    <Flickity
                        className="__scroll-selector"
                        options={flickityOptions}
                    >
                        {/* <!-- Movies 1 --> */}
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                slug={movie.slug}
                                thumbnail={movie.thumbnail}
                                category={movie.category}
                                name={`${movie.name}`}
                            />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
}
