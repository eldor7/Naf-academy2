import React from 'react'
import { Aboutcon, Aboutnav, Boder, Border, Buttoncon, Cal, Calendarimg, Clockk, Comcal, Comdevv, Comdown, Comimg, Comleft, Comm, Comright, Comwatch, Desing, Desingdown, Desingleft, Desingright, Dleft, Dleftimg, Inputcon, Inputtype, Kalendar, Labelcon, Labeldown, Lessoncalendar, Lessonclock, Lessoncon, Lessondown, Lessonimg, Lessonleft, Lessonright, Lessonup, Mark, Markdown, Markdownn, Marketcon, Marketimg, Marketting, Markettingleft, Markettingright, Watch, Watchimg, Webdevv, Webleft, Webleftimg, Webleftt, Webpage, Webright, Webup } from './style'
import  webleftimg  from '../../../assets/img/rafiki.png'
import webright from '../../../assets/img/Group.png'
import markettingright from '../../../assets/img/groupp.png'
import desingright  from '../../../assets/img/desingg.png'
import  comright  from '../../../assets/img/comimg.png'
import  lessonright from '../../../assets/img/lesson.png'
import watchimg from '../../../assets/img/clock.png'
import calendarimg from '../../../assets/img/bi.png'
import marketimg from '../../../assets/img/marketing.png'
import dleftimg from '../../../assets/img/design.png'
import comimg from '../../../assets/img/com.png'
import lesson from '../../../assets/img/webd.png'






const AboutPage = () => {
  return (

    <Aboutcon>
        <Aboutnav>
            <p>Ochiq darslar</p>
            <Border/>
            <span>Barchasi</span>
        </Aboutnav>
        <Webpage>
            <Webdevv>
                <Webleft>
                    <Webup>
                     <h2>Web dasturlash</h2>
                     <Webleftimg src={webleftimg}/>
                     </Webup>
                 <Webleftt>
                     <h3>Web dasturlash</h3>
                     <p>Web dasturlash kurslarida zamonaviy va <br />
                        murakkab web saytlar yaratish , web <br />
                        ilovalar uchun frontend va backend qismini <br />
                        yozish bo’yicha chuqur bilimga ega bo’lasiz <br />
                        (Frontend va backend kurslariga alohida <br />
                        yozilishingiz ham mumkin)</p>
                        <Boder/>
                        <Watch>
                        <Watchimg src={watchimg}/>
                        <p>Kurs davomiyligi 9 oy</p>
                        </Watch>
                        <Cal>
                        <Calendarimg src={calendarimg}/>
                        <p>Haftada 3 kun 2 soatdan</p>
                        </Cal>
                        <Buttoncon>
                         <button>Kursga yozilish</button>
                       </Buttoncon>
                    </Webleftt>
                </Webleft>
                <Webright src={webright}/>
            </Webdevv>
            <Marketting>
                <Markettingleft>
                   <Marketcon>
                   <h2>Digital Marketing</h2>
                     <Marketimg src={marketimg}/>
                   </Marketcon>
                   <Markdown>
                    <h3>Digital Marketing</h3>
                    <p>Web dasturlash kurslarida zamonaviy va <br />
                    murakkab web saytlar yaratish , web <br />
                     ilovalar uchun frontend va backend qismini <br />
                      yozish bo’yicha chuqur bilimga ega bo’lasiz <br />
                       (Frontend va backend kurslariga alohida <br />
                        yozilishingiz ham mumkin)</p>
                        <Boder/>
                       <Mark>
                        <Watchimg src={watchimg}/>
                          <p>Kurs davomiyligi 3 oy</p>
                       </Mark>
                       <Markdownn>
                       <Calendarimg src={calendarimg}/>
                        <p>Haftada 3 kun 2 soatdan</p>
                       </Markdownn>
                       <Buttoncon>
                       <button>Kursga yozilish</button>
                       </Buttoncon>
                   </Markdown>
                </Markettingleft>
                <Markettingright src={markettingright}/>
            </Marketting>
            <Desing>
                <Desingleft>
                    <Dleft>
                        <h2>Grafik Dizayn</h2>
                        <Dleftimg src={dleftimg}/>
                    </Dleft>
                    <Desingdown>
                        <h3>Grafik Dizayn</h3>
                        <p>Web dasturlash kurslarida zamonaviy va <br />
                        murakkab web saytlar yaratish , web <br />
                         ilovalar uchun frontend va backend qismini <br />
                          yozish bo’yicha chuqur bilimga ega bo’lasiz <br />
                           (Frontend va backend kurslariga alohida <br />
                            yozilishingiz ham mumkin)</p>
                        <Boder/>
                        <Clockk>
                            <Watchimg src={watchimg}/>
                            <p>Kurs davomiyligi 4 oy</p>
                        </Clockk>
                        <Kalendar>
                            <Calendarimg src={calendarimg}/>
                            <p>Haftada 3 kun 2 soatdan</p>
                        </Kalendar>
                        <Buttoncon>
                            <button>Kursga yozilish</button>
                        </Buttoncon>
                    </Desingdown>
                </Desingleft>
                <Desingright src={desingright}/>
            </Desing>
            <Comdevv>
                <Comleft>
                   <Comm>
                    <h2>Komputer savodxonligi</h2>
                    <Comimg src={comimg}/>
                   </Comm>
                   <Comdown>
                             <h3>Komputer savodxonligi</h3>
                             <p>Web dasturlash kurslarida zamonaviy va <br />
                            murakkab web saytlar yaratish , web <br />
                            ilovalar uchun frontend va backend qismini <br />
                            yozish bo’yicha chuqur bilimga ega bo’lasiz <br />
                            (Frontend va backend kurslariga alohida <br />
                            yozilishingiz ham mumkin)</p>
                            <Boder/>
                    <Comwatch>
                        <Watchimg src={watchimg}/>
                        <p>Kurs davomiyligi 2 oy</p>
                    </Comwatch>
                    <Comcal>
                        <Calendarimg src={calendarimg}/>
                        <p>Haftada 3 kun 2 soatdan</p>
                    </Comcal>
                    <Buttoncon>
                            <button>Kursga yozilish</button>
                    </Buttoncon>
                   </Comdown>
                </Comleft>
                <Comright src={comright}/>
            </Comdevv>
            <Lessoncon>
                <Lessonleft>
                    <Lessonup>
                    <h2>Web dizayn</h2>
                    <Lessonimg src={lesson}/>
                    </Lessonup>
                    <Lessondown>
                        <h3>Web dizayn</h3>
                        <p>Web dasturlash kurslarida zamonaviy va <br />
                        murakkab web saytlar yaratish , web <br />
                         ilovalar uchun frontend va backend qismini <br />
                          yozish bo’yicha chuqur bilimga ega bo’lasiz <br />
                           (Frontend va backend kurslariga alohida <br />
                            yozilishingiz ham mumkin)</p>
                        <Boder/>
                        <Lessonclock>
                            <Watchimg src={watchimg}/>
                            <p>Kurs davomiyligi 4 oy</p>
                        </Lessonclock>
                        <Lessoncalendar>
                            <Calendarimg src={calendarimg}/>
                            <p>Haftada 3 kun 2 soatdan</p>
                        </Lessoncalendar>
                        <Buttoncon>
                            <button>Kursga yozilish</button>
                        </Buttoncon>
                    </Lessondown>
                </Lessonleft>
                <Lessonright src={lessonright}/>
            </Lessoncon>

            <Inputtype>
                     <h1>Kursga yozilish uchun xabar qoldiring</h1>
                    <Inputcon>
                    <Labelcon>
                    <label htmlFor="">Ism</label>
                    <input type="text" />
                    </Labelcon>
                    <Labeldown>
                    <label htmlFor="">Telefon <span>(Ko’rsatilishi shart)</span></label>
                    <input type="number" />
                    </Labeldown>
                    </Inputcon>
                    <label htmlFor="">Xabaringizni qoldiring</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Xabar qoldirish</button>
            </Inputtype>























        </Webpage>
    </Aboutcon>





  )


}

export default AboutPage