# youtube-auto-stream
## Stream YouTube automatically

ကျွန်တော်တို့ကြိုက်တဲ့ Twice တို့ Blackpink တို့ကိုသေသေချာချာ view count တတ်ချင်ပါသလား။

ဒီဟာက ဗီဒီယိုက auto ဖွင့်ထားတယ်ဆိုပေမဲ့ browser နဲ့သေချာပေါ်လာပြီး stream တာမို့လို့ view count သေချာတက်ပါတယ်။

ကြော်ငြာလည်းတတ်ပါတယ်။



## ဘယ်လိုစမလဲဆိုရင် 

ဒီ repository လေးကို zip file အနေနဲ့ download အရင်လုပ်လိုက်ပါ။

![image](https://user-images.githubusercontent.com/16256698/132728359-d0f208ca-5c41-400e-a23a-ed896ddee5a8.png)



## အဆင့်ဆင့်ဘာလုပ်ရမလဲဆိုရင်တော့ -

- package တွေ install လုပ်ရမှာဆိုတော့ install.bat file ကို ဖွင့်လိုက်ပါ။ (လိုင်းပေါ်မူတည်ပြီးတစ်ခါတစ်ခါ fail တတ်ပါတယ်။)

- package က browser တစ်ခုကို download လုပ်တာဆိုတော့ file size ကြီးတာပါ။

- .env ဆိုတဲ့ file လေးအသစ်ဆောက်ပြီး .env.example ဆိုတဲ့ဟာတွေအကုန်ကူးထည့်။ 

- .env file ထဲ YOUTUBE_URL ကိုယ် stream ချင်တဲ့ YouTube video link ထည့်။

- (example YOUTUBE_URL=[https://www.youtube.com/watch?v=dQw4w9WgXcQ](https://www.youtube.com/watch?v=dQw4w9WgXcQ&fbclid=IwAR20z5kXDEt7WH03Lr9ebA-u4cN-5UBF2FB0n1aIXOE_FgfOdo3-FwSIZp4))

- SECONDS_TO_WAIT_EACH_VIDEOS မှာ ကိုယ်ထည့်ချင်တဲ့ တစ်ခါ stream ရင် session တစ်ခုမှာစက္ကန့်ဘယ်လောက်ကြာမလဲသက်မှတ်မယ်။ လေးမိနစ်ကြာတဲ့ဗီဒီယိုမှာကြော်ငြာကြည့်ချင်ရင်နှစ်မိနစ်ပေါင်းထဲပေါ့(စုစုပေါင်း480စက္ကန့်)။ 

  (example SECONDS_TO_WAIT_EACH_VIDEOS=480)

- start.bat file ကိုဖွင့်ပြီးစလို့ရပါပြီ။ တစ်ခါ run ရင် အခါတစ်ထောင်မပြည့်မချင်း stream မှာပါ။ တစ်ကြိမ်မှာတစ်ခါဘဲ stream လို့ရမှာပါ။ အဲ့တော့တစ်ခါ run ရင် တစ်နေကုန်ဖွင့်ထားလို့ရတယ်။

- စ run တာနဲ့ chromium browser ပွင့်လာပါမယ်။ ကြော်ငြာလဲတတ်ပါတယ်။

- feature တွေကတော့ session တစ်ခုပြီးတိုင်းဗီဒီယိုကြည့်တာပြီးခဲ့မပြီးခဲ့သိရအောင် session တစ်ခုပိတ်ခါနည်းတိုင်း screenshot သိမ်းပေးပါတယ်။


## Container နဲ့ Runချင်သူများ

- Dockerသွင်းထားပါ

- docker-compose သွင်းပါ ပြီးလျှင် အောက်ပါ Command များကို run ပေးပါ

- လက်ရှိမှာ Replica 3 ခုဖွင့်ထားပေမယ့် ကိုယ့်စက်ကနိုင်ရင် replica ကိုပြင်ပြီးဖွင့်လို့ရပါတယ်

```
  docker-compose build streamer

  docker-compose up -d streamer --remove-orphans

```


အားလုံးဘဲကိုယ်ကြိုက်တဲ့ Idol ကိုထိထိရောက်ရောက် support နိုင်ကြပါစေ။ ကျွန်တော်ကတော့ Lisa fan ပါ။
