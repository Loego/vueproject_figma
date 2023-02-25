<template>
    <div>
        <div class="oPanelContainer"> 
            <div class="panelTitle"> How do I get HMT?</div>
            <div class="logoBtn"> <img src="../../assets/images/others/logos (1).png"> </div>
            <div class="logoBtn"> <img src="../../assets/images/others/logos (2).png"> </div>
            <div class="logoBtn"> <img src="../../assets/images/others/logos (3).png"> </div>
            <div class="logoBtn"> <img src="../../assets/images/others/logos (4).png"> </div>
            <div class="logoBtn"> <img src="../../assets/images/others/logos (5).png"> </div>
        </div>
        <div class="oPanelContainer" style="height: 358px"> 
            <div class="panelTitle"> Utility of the HUMAN token</div>
            <div class="UtilityBtn"> <img src="../../assets/images/others/utilities (1).png"> </div>
            <div class="UtilityBtn"> <img src="../../assets/images/others/utilities (2).png"> </div>
            <div class="UtilityBtn"> <img src="../../assets/images/others/utilities (3).png"> </div>
        </div>
        <div class="Disclaimer" style="height: 308px"> 
            <div class="panelTitle" style="text-align:left;"> Disclaimer</div>
            <span style="font-size: 20px"> The HUMAN Protocol Foundation makes no representation, warranty, or undertaking, express or implied, as to the accuracy, reliability, completeness, or reasonableness of the Information. Any assumptions, opinions, and estimates expressed in the information on this page constitutes the HUMAN Protocol Foundation’s judgment as of 18/11/21 and are subject to change without notice. The HUMAN Protocol Foundation does not accept any liability for any direct, consequential or other loss arising from reliance on the contents of the information in this graphic.
 </span>
        </div>
    </div>
</template>

<style scoped>
.logoBtn{
    display: flex;
    justify-content: center; align-items: center; text-align: center;
    width: 222px;
    height: 223px;
    background-color: white;
    border-radius: 12px;
    margin-right: 10px;
    box-shadow: 0px 0px 20px rgba(100,100,100,0.1);
}
.Disclaimer{
    margin-top: 339px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1492px;
    height: 418px;
    padding: 180px;
    text-align: left;
    color: #320A8D;
    margin-bottom: 100px;
}
.UtilityBtn{
    margin-top: 100px;
    display: flex;
    justify-content: center; align-items: center; text-align: center;
    width: 367px;
    height: 368px;
    background-color: white;
    border-radius: 50px;
    margin-right: 50px;
    box-shadow: 0px 0px 20px rgba(100,100,100,0.1);
}

.UtilityBtn>img{
    width: 100px;
    height: 100px;
}
.oPanelContainer{
    margin-top: 139px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1472px;
    height: 618px;
    padding: 100px;
    background: #F2F2FA;
    border-radius: 40px;
    justify-content: center;
}
.panelTitle{
    width: 100%;
    font-family: 'Alliance No.1';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 72px;
    /* or 120% */

    text-align: center;
    letter-spacing: -0.4px;

    /* Blue/400 */

    color: #320A8D;
}
</style>