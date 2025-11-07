
import CryptoJS   from "crypto-js";



export class Commonutils
{
     
    private secretkey:string;

    constructor()
    {
        //this.secretkey= process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

        if(process.env.SECRET_KEY)
        {
             this.secretkey=process.env.SECRET_KEY;
        }else{
            throw new Error('Please provide secret key while execution')
        }
    }
    public encrypted(data:string)
    {
         const encrypteddata= CryptoJS.AES.encrypt(data,this.secretkey).toString();
         //console.log(encrypteddata);
         return encrypteddata;
    }


    public decrypted(data:string)
    {
          const decrypteddata= CryptoJS.AES.decrypt(data,this.secretkey).toString(CryptoJS.enc.Utf8);
          //console.log(decrypteddata)
          return decrypteddata;
    }
    
}