import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";
import FeaturedMovies from "@/Components/FeaturedMovies";
import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({ auth }) {
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
        <Authenticated auth={auth}>
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
                    {[1, 2, 3, 4].map((i) => (
                        // {/* <!-- Movie Thumbnail --> */}
                        <FeaturedMovies
                            key={i}
                            slug="the-batman-in-love"
                            thumbnail="/images/featured-1.png"
                            rating={i + 1}
                            category="Action • Horror"
                            name={`The Batman in Love ${i}`}
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
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                slug="meong-golden"
                                thumbnail="/images/browse-1.png"
                                category="Horror • Love"
                                name={`Meong Golden ${i}`}
                            />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
}
