<template>
    <div class="landContainer flex-Halign-center flex-column">
        <div class="displayBoardPic displayContainer ">
            <div class="w-2-1 titleContainer">
                <div class="titlePanel"> HUMAN Token</div>
                <div class="titlePanel fc-darkBlue fs-bold"> (HMT) </div>
                <div class="tipPanel"> Fuelling the HUMAN ecosystem </div>
                <div class="primaryPanel" > 
                    <div class="primaryBtn" style="width:120px; padding: 15px 15px;"> Learn More </div>
                </div>
            </div>
            <div class="w-2-1">
            </div>
        </div>
        <div class="displayWorldPic displayContainer" style="flex-direction:row-reverse; ">
           <div class="w-2-1 titlePanel flex-Halign-center flex-Valign-left" style="font-size: 52px; text-align: left; line-height: 60px;"> <div>HMT <span class="fc-darkBlue"> funds the processing of digitized work, and rewards workers for their contributions.</span></div> </div>        
        </div>
    </div>
</template>

<script>
export default {
  name: 'NuxtLand'
}
</script>

<style>

.landContainer{
    width: 1753px;
    margin-top: 60px;
}

.displayBoardPic{
    background-image: url("../../assets/images/Landbar/displayBoard.png") !important;
    background-position-x: 980px !important;
    background-position-y: 90px !important;
}
.displayWorldPic{
    background-image: url("../../assets/images/Landbar/displayWorld.png") !important;
    background-position-x: 150px !important;
    background-position-y: 20px !important;
    background-color: transparent !important;
    width: 1453px !important;
}

.displayContainer{
    display: flex;
    width: calc(100% - 20px);
    height: 680px;
    background: #F2F2FA;
    border-radius: 40px;
    padding-left: 20px;
    background-repeat: no-repeat;
    margin-bottom: 130px;
}

.primaryPanel{
    margin-top: 35px;
    width: 100%;
}

.titleContainer{
    padding-left: 87px;
    padding-top: 180px;
}
.titlePanel{
    width: 80%;
    font-family: 'Alliance No.1';
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    line-height: 80px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.4px;
    color: #6309FF;
    
    align-items: center;
}
.tipPanel{
    display: flex;
    font-family: 'Alliance No1';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.1px;
    color: #320A8D;
    margin: 25px 0px;
}

</style>