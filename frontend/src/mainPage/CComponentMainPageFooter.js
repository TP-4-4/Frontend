import React, {Component} from 'react';
import logo from '../img/logo.png';
import './CComponentMainPageFooter.css'
import facebook from '../img/facebook.png';
import inst from '../img/inst.png';
import skype from '../img/skype.png';
import tg from '../img/tg.png';
import viber from '../img/viber.png';
import vk from '../img/vk.png';
import ask from '../img/ask.png';
import cat4 from '../img/cat4.png';

class CComponentMainPageFooter extends Component {
    render() {
        return (
            <div>
                <div className='inline-all'>
                    <div>
                        <img src={logo} alt={logo} className='logo'/>
                        <h2 className='h2'>Мы в соцсетях</h2>
                        <div className='inline'>
                            <div>
                                <h3 className='h3'>YouTube</h3>
                                <h3 className='h3'>Instagram</h3>
                            </div>
                            <div>
                                <h3 className='h3'>Telegram</h3>
                                <h3 className='h3'>ВКонтакте</h3>
                            </div>
                            <div>
                                <h3 className='h3'>Воронеж,</h3>
                                <h3 className='h3'>Университетская пл. 1</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='h1'>ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГА НА СВЯЗИ:</h1>
                        <div className='inline'>
                            <img src={viber} alt={viber} className='img'/>
                            <img src={skype} alt={skype} className='img'/>
                            <img src={inst} alt={inst} className='img'/>
                            <img src={tg} alt={tg} className='img'/>
                        </div>
                        <div className='inline'>
                            <img src={facebook} alt={facebook} className='img'/>
                            <img src={vk} alt={vk} className='img'/>
                            <img src={ask} alt={ask} className='img'/>
                        </div>
                    </div>
                </div>
                <img className='Footer-cat' src={cat4} alt={cat4}/>
            </div>

        );
    }
}

export default CComponentMainPageFooter;