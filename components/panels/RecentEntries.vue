<template>
    <div class="RecentPage">
        <div class="flex-row">
            <div style="width: 500px; height: 70px; padding-left: 200px;">
                <h3 class="fc-darkBlue" style="margin-top: 0;"> RecentEntries</h3>
            </div>
            <div style="width: calc(100% - 850px); height: 70px;"></div>
            <div style="width: 150px; height: 70px;"> <button class="btnPrimary"> Go to Blog </button> </div>
        </div>
        <div class="entryContainer">
            <div class="entryItem">
                <div class="entryHeader">
                    <img src="../../assets/images/Recent/Screen1.png" style="height: 386px;">
                </div>
                <div class="entryBody  activeItem"> 
                    <div class="dateNote"> Mar 31 2022 </div>
                    <div style="font-size: 50px"> HUMAN Protocol to launch new Reputation Oracles powered by Chainlink</div>
                </div>
                <div class="entryHooter"> 
                </div>
            </div>
            <div class="entryItem">
                <div class="entryHeader">
                    <img src="../../assets/images/Recent/Screen2.png" style="height: 386px;">
                </div>
                <div class="entryBody"> 
                    <div class="dateNote"> Mar 31 2022 </div>
                    <div style="font-size: 50px"> Interview with Andreas Schemm, Head of Ecosystem Development & Operations at HUMAN Protocol</div>
                </div>
                <div class="entryHooter"> 
                </div>
            </div>
            <div class="entryItem">
                <div class="entryHeader">
                    <img src="../../assets/images/Recent/Screen3.png" style="height: 386px;">
                </div>
                <div class="entryBody"> 
                    <div class="dateNote"> Mar 31 2022 </div>
                    <div style="font-size: 50px"> HUMAN Protocol to launch new Reputation Oracles powered by Chainlink</div>
                </div>
                <div class="entryHooter"> 
                </div>
            </div>

        </div>
        
    </div>
</template>

<style scoped>
.activeItem{
    box-shadow: 0px 15px 20px rgba(100,100,100,0.1);
}
.entryContainer{
    display: flex;
    flex-direction: row;
    height: 800px;
    margin-top: 100px;
    width: 1900px;
    padding-left: 200px;
    text-align: right;
    overflow-y: hidden;
    overflow-x: hidden;
}
.RecentPage{
    font-family: 'Alliance No.1';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.4px;
    color: #320A8D;
    margin-bottom: 100px;
}
.btnPrimary{
    cursor: pointer;
    padding: 5px 20px; height: 40px; background-Color:transparent;
    color: #320A8D;
    border-radius: 5px;
    border: 2px solid #320A8D;
}
.dateNote{
    font-family: 'Alliance No1';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #320A8D;
    margin: 30px 0px;
}
.entryItem{
    height: 750px;
    width: 850px;
    margin-right: 50px;    
    padding: 0px 20px;
    text-align: left;
}
.entryHeader{
    display: block;
}
.entryBody{
    display: block;
    width: 100%;
    height: 350px;
    padding: 0px 10px;
    margin-left: -10px;
}
.entryHooter{
    display: block;
    text-align: right;
}
</style>