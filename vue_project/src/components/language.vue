<template>
    <div>
        <div class="container mt-5 px-5">
            <h1>LANGUAGES</h1>
            <div class="row mt-4">
                <!-- HTML & CSS -->
                <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
                <div class="card col-lg-5 float-left p-0 my-4">
                    <div class="html"></div>
                    <div class="card-body">
                        <h4 class="card-title">HTML</h4>
                        <p style="color:gray;">経験年数: 2年</p>
                        <p style="color:gray;">FW: Haml</p>
                        <p class="card-text text-left">
                        個人開発、エンジニアインターン問わず、多くのサイトをコーディングした経験があります。
                        </p>
                    </div>
                </div>
                <div class="card col-lg-5 float-left p-0 my-4">
                    <div class="css"></div>
                    <div class="card-body">
                        <h4 class="card-title">CSS</h4>
                        <p style="color:gray;">経験年数: 2年</p>
                        <p style="color:gray;">FW: Bootstrap4</p>
                        <p class="card-text text-left">
                        個人開発、エンジニアインターン問わず、多くのサイトをコーディングした経験があります。Bootstrapに関しては、このサイトでも使用しています。
                        </p>
                    </div>
                </div>
                <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

                <!-- Ruby & PHP -->
                <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
                <div class="card col-lg-5 float-left p-0 my-4">
                    <div class="ruby"></div>
                    <div class="card-body">
                        <h4 class="card-title">Ruby</h4>
                        <p style="color:gray;">経験年数: 1.5年</p>
                        <p style="color:gray;">FW: RubyOnRails/Sinatra</p>
                        <p class="card-text text-left">
                        一年間ほど、国内と国外(フィリピン)のプログラミングスクールで、日本人の初心者向けにRoRを教えていたので、基本的な項目については理解できています。また現在日本のスタートアップにて、Rails/Sinatraを用いた開発を行っています。
                        </p>
                    </div>
                </div>
                <div class="card col-lg-5 float-left p-0 my-4">
                    <div class="php"></div>
                    <div class="card-body">
                        <h4 class="card-title">PHP</h4>
                        <p style="color:gray;">経験年数: 1年</p>
                        <p style="color:gray;">FW: Laravel/Wordpress</p>
                        <p class="card-text text-left">
                        フィリピンのスタートアップでインターンをしていた際に使用していました。基本的な内容は理解できています。また、Wordpressを用いたサイト作成の経験もあり、実際にサイトをリリースしています。
                        </p>
                    </div>
                </div>
                <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

                <!-- Pytnon & JS -->
                <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
                <div class="card col-lg-5 float-left p-0 my-4">
                    <div class="python"></div>
                    <div class="card-body">
                        <h4 class="card-title">Python</h4>
                        <p style="color:gray;">経験年数: 初心者</p>
                        <p style="color:gray;">FW: Django</p>
                        <p class="card-text text-left">
                        過去のインターン先で書いた経験があります。主にWebサービス開発のために、Django使用していました。
                        </p>
                    </div>
                </div>
                <div class="card col-lg-5 float-left p-0 my-4">
                    <div class="js"></div>
                    <div class="card-body">
                        <h4 class="card-title">Javascript(ES6)</h4>
                        <p style="color:gray;">経験年数: 0.5年</p>
                        <p style="color:gray;">FW: React/Vue</p>
                        <p class="card-text text-left">
                        現在勤務しているインターン先でReactを用いた開発を行っています。また、このサイトはVueを用いて開発されています。
                        </p>
                    </div>
                </div>
                <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
h4 {
    font-size: 30px;
}

.html {
    background-color: rgb(227,77,37);
    height: 50px;
}

.css {
    background-color: rgb(91,67,128);
    height: 50px;
}

.ruby {
    background-color: rgb(193,39,45);
    height: 50px;
}

.php {
    background-color: rgb(136,146,191);
    height: 50px;
}

.python {
    background-color: rgb(52,115,165);
    height: 50px;
}

.js {
    background-color: rgb(241,223,90);
    height: 50px;
}

@media screen and (max-width:800px){
    .sp-block {
        display: none;
    }
}

</style>
