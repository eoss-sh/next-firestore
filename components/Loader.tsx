interface LoaderPageProps {
  show: boolean;
}

const Loader = ({ show }: LoaderPageProps) => {
  return show ? <div className="loader"></div> : null;
};

export default Loader;
