const Footer = () => (
    <footer style={styles.footerBar}>
      <div >
        <div style={styles.rowStyle}>
          <p  xs={12} sm={12} md={12} lg={12}>
            <p style={styles.copyRight}>&copy; 2022 Olwethu Nyondo - All Rights Reserved</p>
          </p>
        </div>
      </div>
    </footer>
  );
  
  const styles = {
    footerBar: {
      padding:"5px",
      bottom: 100,
      width: "100%",
      position:"bottom",
      backgroundColor: "",
      minHeight: "25%",
      borderRadius: "20px",
      borderColor:"white",
      allignItems: "center",

    },
    rowStyle: {
      padding:"5px",

      height: 100,
      justifyContent: "center",
      alignItems: "center",
      borderWidth:"1px",
    },
    copyRight: {
      paddingTop: "15px",
      color: "LightSlateGray",
      fontSize: "2rem",
      textAlign: "center",
      textTransform:"uppercase",
      fontWeight: 700,
      opacity: .5,
    }
  };
  
export default Footer;