import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('admin.dashboard.movie.store'));
    };

    return (
        <Authenticated auth={auth.user}>
            <Head title="Admin - Create Movie"></Head>
            <h2>Create new movie</h2>
            <hr className="mb-4" />
            <form className="w-[370px]" onSubmit={submit}>
                <InputLabel value="Name" />
                <TextInput
                    autoComplete={"off"}
                    type="text"
                    name="name"
                    value={data.name}
                    className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none mb-4"
                    placeholder="Please input name movie here . . ."
                    onChange={(e) => setData('name', e.target.value)}
                    
                />
                <InputError message={errors.name} className="mt-2" />
                <InputLabel value="Category" />
                <TextInput
                    autoComplete={"off"}
                    type="text"
                    name="category"
                    value={data.category}
                    className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none mb-4"
                    placeholder="Please input category movie here . . ."
                    onChange={(e) => setData('category', e.target.value)}
                    
                />
                <InputError message={errors.category} className="mt-2" />
                <InputLabel value="Video Url" />
                <TextInput
                    autoComplete={"off"}
                    type="url"
                    name="video_url"
                    value={data.video_url}
                    className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none mb-4"
                    placeholder="Please input video url movie here . . ."
                    onChange={(e) => setData('video_url', e.target.value)}
                />
                <InputError message={errors.video_url} className="mt-2" />
                <InputLabel value="Thumbnail" />
                <TextInput
                    autoComplete={"off"}
                    type="file"
                    name="thumbnail"
                    value={data.thumbnail}
                    className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none mb-4"
                    placeholder="Please input thumbnail movie here . . ."
                    onChange={(e) => setData('thumbnail', e.target.value)}
                />
                <InputError message={errors.thumbnail} className="mt-2" />
                <InputLabel value="Rating" />
                <TextInput
                    autoComplete={"off"}
                    type="number"
                    name="rating"
                    value={data.rating}
                    className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none mb-4"
                    placeholder="Please input rating movie here . . ."
                    onChange={(e) => setData('rating', e.target.value)}
                />
                <InputError message={errors.rating} className="mt-2" />
                <div className="flex flex-row mt-4 items-center">
                    <InputLabel value="Is featured" className="mr-2 mt-1 mb-4" />
                    <Checkbox name="is_featured" value={data.is_featured} 
                    onChange={(e) => setData('is_featured', e.target.checked)} />
                </div>
                <PrimaryButton
                    type="submit"
                    variant="primary"
                    className="rounded-2xl bg-alerange py-[13px] text-center"
                    disabled={processing}
                    processing={processing}
                >
                    <span className="text-white font-semibold">Save</span>
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
