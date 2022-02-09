import Head from "next/head";

const Header = () => (
  <div className="container-fluid">
    <Head>
      <title>MIPI clone</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/* Bootstrap core CSS  */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </Head>
  </div>
);

export default Header;
