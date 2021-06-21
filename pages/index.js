import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 font-weight-bold">
                WINN News & Magazine Website
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead">
                We'll provide hot topics by verified resources
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Entertainment</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/Entertainment">
                    <a>
                      <h3 className="h1">Entertainment News</h3>
                    </a>
                  </Link>
                  <p className="lead">Entertainment News around the globe</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Politics</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/politics">
                    <a>
                      <h3 className="h1">Politics News</h3>
                    </a>
                  </Link>
                  <p className="lead">
                  Politics News around the globe
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Hot Topics</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/hottopics">
                    <a>
                      <h3 className="h1">Hot Topics</h3>
                    </a>
                  </Link>
                  <p className="lead">
                  Hot Topics News around the globe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
