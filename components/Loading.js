import Loader from 'react-loader-spinner';

export default function Loading() {
    return (
        <div className="loadingContainer">
            <Loader
                type="Oval"
                color="#FFD336"
                height={70}
                width={70}
            />
        </div>
    );
};
