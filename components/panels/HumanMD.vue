<template>
    <div class="humanMDContainer">
        <div class="humanTitle"> HUMAN in the media</div>
        <div class="linkerBtn"> <img src="../../assets/images/human/humanBtn (1).png"> </div>
        <div class="linkerBtn"> <img src="../../assets/images/human/humanBtn (2).png"> </div>
        <div class="linkerBtn"> <img src="../../assets/images/human/humanBtn (3).png"> </div>
        <div class="linkerBtn"> <img src="../../assets/images/human/humanBtn (4).png"> </div>
        <div class="linkerBtn"> <img src="../../assets/images/human/humanBtn (5).png"> </div>
        <div class="linkerBtn"> <img src="../../assets/images/human/humanBtn (6).png"> </div>
        <div class="linkerBtn"> <img src="../../assets/images/human/humanBtn (7).png"> </div>
        <div class="linkerBtn"> <img src="../../assets/images/human/humanBtn (8).png"> </div>
    </div>
</template>

<style scoped>
.linkerBtn{
    display: flex;
    justify-content: center; align-items: center; text-align: center;
    width: 288px;
    height: 145px;
    background-color: white;
    border-radius: 12px;
    margin-right: 20px;
}
.linkerBtn>img{
    width: 190px;
    height: 34px;
}
.humanMDContainer{
    margin-top: 239px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width:1472px;
    height: 658px;
    padding: 100px;
    background: #F2F2FA;
    border-radius: 40px;
    justify-content: center;
}
.humanTitle{
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