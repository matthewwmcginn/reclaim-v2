export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Features</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Security</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Help Center</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact Us</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a></li>
                            <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; 2025 Reclaim Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
