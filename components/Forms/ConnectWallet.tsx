import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import WalletButton from "../WalletButton";
import useWeb3Modal from "../../hooks/useWeb3Modal";
import { Web3Provider } from "@ethersproject/providers";
import { Button, ListItemAvatar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Image from 'next/image';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@mui/material/Box';
// import { Link } from "react-router-dom";
//Public
   


export default function ConnectWallet({ formStep, nextFormStep, provider, loadWeb3Modal, logoutOfWeb3Modal })

{
  const { register, handleSubmit, formState: { errors } } = useForm();
  //const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    //setFormValues(values);
    nextFormStep();
  };
  
  return (
    <List>
      <Grid container spacing={1}
          variant="fullWidth"
          direction="row"
          justifyContent="center"
          alignItems="flex-start" style={{marginTop: '4px'}}>
            <Grid direction="row" item xs={12} md={12}>
              <ListItem style={{flexDirection: 'column'}}>
                <ListItem item xs={4} style={{width: 'auto'}}>
                  <Image disableTypography className={styles.imgConnect} src="/images/logopoh.png" alt="me" width="82" height="80"    />
                </ListItem>
                <ListItemText disableTypography className={styles.title}>Join POH</ListItemText>
                <ListItemText disableTypography className={styles.journey} >To begin this journey, you will need a crypto wallet.</ListItemText>
              </ListItem>
            </Grid>
            <Grid className={formStep === 0 ? styles.showForm : styles.hideForm} item xs={12} md={12} >
            
                <ListItem className={styles.connect1} alignItems="flex-start">
                  <div style={{flexDirection: "column", }}>
                    <Image className={styles.metmask} src="/images/metamasklogo.png" alt="me" width="22" height="17"/>
                    <Image className={styles.trustWllt} src="/images/trustwallet.png" alt="me" width="18" height="23"/>
                  </div>
                  <div style={{flexDirection: "column"}}> 
                    <Image className={styles.fortmat} src="/images/fortmaticicon.png" alt="me" width="14" height="22"/>
                    <Image className={styles.wlltcnt}  src="/images/walletconnecticon.png" alt="me" width="21" height="13"/>
                  </div>
                    <WalletButton
                      onClick={() => nextFormStep()}
                      provider={provider as Web3Provider}
                      loadWeb3Modal={loadWeb3Modal}
                      logoutOfWeb3Modal={logoutOfWeb3Modal}
                    /> 
                    
                <ListItemText className={styles.chooseWallet}>Choose your favorite wallet</ListItemText>
                {/* <Button style={{position: "relative"}}> */}
                <button style={{backgroundColor:"transparent"}}>
                <ArrowForwardIcon style={{color: "#FF9900", width: "16px", height: "15px"}} 
                onClick={() => nextFormStep()} />
                </button>
                {/* </Button> */}
                  {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formRow}>
                      <label htmlFor="displayName">Display Name*</label>
                      <input type="text" {...register("displayName", { required: true })} />
                      {errors.displayName && <span>This field is required</span>}
                    </div>

                    <div className={styles.formRow}>
                      <label htmlFor="bio">Short Bio</label>
                      <input type="text" {...register("bio")} />
                    </div>

                    <button type="submit">
                      Next
                    </button>
                  </form>  */}
                  
                </ListItem>
              </Grid>
              <Grid item xs={12} md={12} >
                <ListItem className={styles.connectWallet1}>
                  <div style={{position: "fixed"}}>
                    <HelpOutlineIcon style={{color:"#E5E5E5", width: "42px", height: "63px"}}/>
                  </div>  
                  <ListItemText  className={styles.needWallet}  >I need a wallet</ListItemText> 
                  <ListItemText  className={styles.learnConnect}>Click here to learn how to create a wallet</ListItemText>
                  <button style={{backgroundColor:"transparent", position: "relative", left: "413px", top: "-40px"}}>
                  <ArrowForwardIcon style={{color: "#FF9900", width: "16px", height: "15px", position: "relative"}}/> 
                  </button>
                {/* <Button
                    onClick={handleClickOpen}
                    
                  /> */}
                
                
                </ListItem> 
              </Grid>
      </Grid>
    </List> 
  );
}