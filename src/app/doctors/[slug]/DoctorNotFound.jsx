export default function DoctorNotFound() {
    return (
        <div className="min-h-[90vh] bg-linear-to-b from-[#0B2436] to-[#061520] text-white flex items-center justify-center px-6">

            <div className="max-w-[900] w-full text-center">

                {/* Icon Circle */}
                <div className="mx-auto mb-8 w-28 h-28 rounded-full bg-[#0B1C2D] border-4 border-[#00B4D8] flex items-center justify-center shadow-xl">
                    <span className="text-5xl">🩺</span>
                </div>

                {/* Title */}
                <h1 className="text-5xl font-bold mb-4">
                    Doctor Not Found
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-lg mb-10">
                    The doctor profile you're looking for doesn't exist or may have been removed.
                </p>

                {/* Info Card */}
                <div className="bg-[#0B1C2D] rounded-2xl p-8 shadow-2xl border border-[#12344d] mb-10">
                    <p className="text-gray-400 leading-relaxed">
                        Please check the URL or explore our list of expert doctors.
                        Our specialists are dedicated to delivering advanced orthopaedic care
                        with precision and compassion.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-6 justify-center">

                    <a
                        href="/doctors"
                        className="bg-linear-to-r from-[#00B4D8] to-[#006275] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
                    >
                        View All Doctors
                    </a>

                    <a
                        href="/"
                        className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0B1C2D] transition"
                    >
                        Back to Home
                    </a>

                </div>

            </div>
        </div>
    );
}