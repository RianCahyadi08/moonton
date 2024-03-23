import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <Authenticated auth={auth.user}>
            <Link href={route("admin.dashboard.movie.create")}>
                <PrimaryButton
                    type="button"
                    variant="primary"
                    className="bg-alerange text-center w-44 p-1"
                >
                    <span className="text-white">Create new movie</span>
                </PrimaryButton>
            </Link>
        </Authenticated>
    );
}
