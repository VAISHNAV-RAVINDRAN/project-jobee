import './UserHome.css';
import fsd from '../static/fsd.jpg';
import fsdc from '../static/fsdc.jpg'
import { useState, useEffect, useRef  } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [isChecked, setIsChecked] = useState(true);
    const [IsNotified, setIsNotified] = useState(true);
    const navigate = useNavigate();
    const homenav = useRef(null);
    const jobnav = useRef(null);
    const meetingnav = useRef(null);
    const companynav = useRef(null);
    const settingsnav = useRef(null);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
      const checkclick = () => {
        setIsChecked(false);
      }
      const checkclickfalse = () => {
        setIsChecked(true);
      }
      const notified = () => {
        setIsNotified(false);
      }
      const notifiedtrue = () => {
        setIsNotified(true);
      }
      const profileclick = (event) => {
        event.preventDefault();
        navigate('/profile');
      }
      
      function JobAlert(props) {
        return (
          <div className='w-full bg-stone-100 flex items-center justify-center border-t-2 p-1 cursor-pointer' style={{height:'17%'}}>
            <div className='h-full flex items-center justify-center' style={{width:'15%'}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="lightgreen"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
            </div>
            <div className='h-full flex items-start justify-center flex-col gap-2' style={{width:'70%'}}>
              <h1 className='text-base font-sans font-bold text-emerald-700'>{props.title}</h1>
              <h5 className='text-xs font-sans font-bold text-zinc-500'>{props.time}</h5>
            </div>
            <div className='h-full flex items-center justify-center' style={{width:'15%'}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="tomato" onClick={props.onDelete}>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </div>
          </div>
        );
      }
      
      function JobAlertList() {
        const [jobAlerts, setJobAlerts] = useState([
          { id: 1, title: 'Your Job Alert For Frontend Developer In Bengaluru', time: '1d 15h' },
          { id: 2, title: 'Your Job Alert For Backend Developer In Mumbai', time: '2d 5h' },
          { id: 3, title: 'Your Job Alert For Full Stack Developer In Delhi', time: '1d 5h' }
        ]);
        
        const [selectedAlert, setSelectedAlert] = useState(null);
        
        const handleDelete = (id) => {
          const updatedAlerts = jobAlerts.filter(alert => alert.id !== id);
          setJobAlerts(updatedAlerts);
        };
        
        const handleSelect = (id) => {
          const selected = jobAlerts.find(alert => alert.id === id);
          setSelectedAlert(selected);
        }
      
        return (    
          <div>
            {jobAlerts.map(alert => (
              <div key={alert.id} className='flex items-center justify-center flex-col bg-stone-100'>
                <JobAlert title={alert.title} time={alert.time} onDelete={() => handleDelete(alert.id)} />
                <button onClick={() => handleSelect(alert.id)} className='text-sm text-blue-700 font-bold pb-2'>View</button>
              </div>
            ))}
            {selectedAlert && (
              <div className='w-full h-full fixed top-0 left-0 flex items-center justify-center backdrop-blur-sm'>
                <div className='h-3/5 flex items-center flex-col p-6 gap-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg' style={{width:'45%',backgroundColor:'white'}}>
                  <h1 className='text-3xl font-bold text-blue-600'>{selectedAlert.title}</h1>
                  <div className='notiexpand w-full h-3/4 overflow-scroll'>
                    <h1 className='text-1xl font-bold text-gray-700'>Qualifications</h1>
                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                        <li>React : 1 year (Required)</li>
                        <li>Bachelor's (Preffered)</li>
                        <li>Node Js : 1 year (Preffered)</li>
                        <li>Cloud Computing : 1 year (Preffered)</li>
                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                    </ul>
                    <h1 className='text-1xl font-bold text-gray-700'>Full Job Description</h1>
                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                        <li>Responsible for development of new highly-responsive, web-based user interface</li>
                        <li>Work and collaborate in a scrum structure</li>
                        <li>Develop components and libraries that are reusable and future-proof</li>
                        <li>Develop a flexible and well-structured APIs to support the system</li>
                    </ul>
                  </div>
                 <button onClick={() => setSelectedAlert(null)} className='w-full bg-blue-700 rounded-lg text-lg font-sans font-bold text-white tracking-wide' style={{height:'12%'}}>close</button>
                </div>
              </div>
            )}
          </div>
        );
      }
      const homenavclick = (event) => {
        homenav.current.style.borderLeft = '4px solid #EF4444';
        homenav.current.style.backgroundColor = '#EBF4FF';
        jobnav.current.style.borderLeft = 'none';
        jobnav.current.style.backgroundColor = 'white';
        meetingnav.current.style.borderLeft = 'none';
        meetingnav.current.style.backgroundColor = 'white';
        companynav.current.style.borderLeft = 'none';
        companynav.current.style.backgroundColor = 'white';
        settingsnav.current.style.borderLeft = 'none';
        settingsnav.current.style.backgroundColor = 'white';
        event.preventDefault();
        navigate('/');
      };
      const jobnavclick = (event) => {
        jobnav.current.style.borderLeft = '4px solid #EF4444';
        jobnav.current.style.backgroundColor = '#EBF4FF';
        homenav.current.style.borderLeft = 'none';
        homenav.current.style.backgroundColor = 'white';
        meetingnav.current.style.borderLeft = 'none';
        meetingnav.current.style.backgroundColor = 'white';
        companynav.current.style.borderLeft = 'none';
        companynav.current.style.backgroundColor = 'white';
        settingsnav.current.style.borderLeft = 'none';
        settingsnav.current.style.backgroundColor = 'white';
        event.preventDefault();
        navigate('/jobs');
      };
      const meetingnavclick = (event) => {
        meetingnav.current.style.borderLeft = '4px solid #EF4444';
        meetingnav.current.style.backgroundColor = '#EBF4FF';
        jobnav.current.style.borderLeft = 'none';
        jobnav.current.style.backgroundColor = 'white';
        homenav.current.style.borderLeft = 'none';
        homenav.current.style.backgroundColor = 'white';
        companynav.current.style.borderLeft = 'none';
        companynav.current.style.backgroundColor = 'white';
        settingsnav.current.style.borderLeft = 'none';
        settingsnav.current.style.backgroundColor = 'white';
        event.preventDefault();
        navigate('/meetings');
      };
      const companynavclick = (event) => {
        companynav.current.style.borderLeft = '4px solid #EF4444';
        companynav.current.style.backgroundColor = '#EBF4FF';
        jobnav.current.style.borderLeft = 'none';
        jobnav.current.style.backgroundColor = 'white';
        meetingnav.current.style.borderLeft = 'none';
        meetingnav.current.style.backgroundColor = 'white';
        homenav.current.style.borderLeft = 'none';
        homenav.current.style.backgroundColor = 'white';
        settingsnav.current.style.borderLeft = 'none';
        settingsnav.current.style.backgroundColor = 'white';
        event.preventDefault();
        navigate('/companies');
      };
      const settingsnavclick = (event) => {
        settingsnav.current.style.borderLeft = '4px solid #EF4444';
        settingsnav.current.style.backgroundColor = '#EBF4FF';
        jobnav.current.style.borderLeft = 'none';
        jobnav.current.style.backgroundColor = 'white';
        meetingnav.current.style.borderLeft = 'none';
        meetingnav.current.style.backgroundColor = 'white';
        companynav.current.style.borderLeft = 'none';
        companynav.current.style.backgroundColor = 'white';
        homenav.current.style.borderLeft = 'none';
        homenav.current.style.backgroundColor = 'white';
        event.preventDefault();
        navigate('/settings');
      };
    return(
        <div>
            {isLoading ? (
                <div className="w-full bg-indigo-100 flex" style={{height:'100vh',alignItems:'center',justifyContent:'center'}}>
                    <div>
                        <lord-icon
                            src="https://cdn.lordicon.com/oezixobx.json"
                            trigger="loop"
                            delay="70"
                            style={{width:'70px',height:'70px'}}>
                        </lord-icon>
                    </div>
                </div>
            ) : (
                <div className='w-full h-full flex items-center justify-center' style={{height:'100vh',backgroundColor:'lavender'}}>
                    <div className='flex items-center justify-center flex-col gap-3 rounded-tl-lg rounded-bl-lg' style={{width:'23%',height:'97vh',backgroundColor:'white'}}>
                        <h1 className='text-3xl font-sans font-bold absolute left-10 top-20'>Jobee</h1>
                        <div className='w-4/5 h-20  flex items-center justify-start gap-2 p-5 cursor-pointer rounded-tr-md rounded-br-md hover:scale-105' style={{backgroundColor:'#EBF4FF',borderLeft:'4px solid #EF4444'}} onclick={homenavclick} ref={homenav} >
                                <lord-icon className='cursor-pointer'
                                    src="https://cdn.lordicon.com/slduhdil.json"
                                    trigger="hover"
                                    style={{width:'25px',height:'25px'}}>
                                </lord-icon>
                                <h1 className='text-xl font-sans font-bold cursor-pointer'>Home</h1>
                            </div>
                            <div className='w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer hover:border-l-4 border-red-500 rounded-tr-md rounded-br-md hover:scale-105 hover:bg-indigo-100' onClick={jobnavclick} ref={jobnav}>
                                <lord-icon className='cursor-pointer'
                                    src="https://cdn.lordicon.com/oezixobx.json"
                                    trigger="hover"
                                    style={{width:'25px',height:'25px'}}>
                                </lord-icon>
                                <h1 className='text-xl font-sans font-bold cursor-pointer'>Jobs</h1>
                            </div>
                            <div className='w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer hover:border-l-4 border-red-500 rounded-tr-md rounded-br-md hover:scale-105 hover:bg-indigo-100' onClick={meetingnavclick} ref={meetingnav}>
                            <span class="material-symbols-outlined font-extrabold text-3xl hover:scale-50 transition-transform">groups</span>
                                <h1 className='text-xl font-sans font-bold cursor-pointer'>Meetings</h1>
                            </div>
                            <div className='w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer hover:border-l-4 border-red-500 rounded-tr-md rounded-br-md hover:scale-105 hover:bg-indigo-100' onClick={companynavclick} ref={companynav}>
                            <span class="material-symbols-outlined font-extrabold text-3xl hover:rotate-12 transition-transform">business_center</span>
                                <h1 className='text-xl font-sans font-bold cursor-pointer'>Companies</h1>
                            </div>
                            <div className='w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer hover:border-l-4 border-red-500 rounded-tr-md rounded-br-md hover:scale-105 hover:bg-indigo-100' onClick={settingsnavclick} ref={settingsnav}>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/dycatgju.json"
                                        trigger="hover"
                                        style={{width:'25px',height:'25px'}}>
                                    </lord-icon>
                                <h1 className='text-xl font-sans font-bold cursor-pointer'>Settings</h1>
                            </div>
                    </div>
                    <div className='flex items-center justify-center flex-col gap-4' style={{width:'52%',height:'97vh',backgroundColor:'lavender'}}>
                        <div className='h-16 bg-white flex items-center justify-center rounded-full gap-2 cursor-pointer' style={{width:'90%'}}>
                            <input type='search' className='w-4/5 p-3 caret-amber-500 font-sans font-bold outline-0' placeholder='Search Jobs'/>
                            <lord-icon className='cursor-pointer'
                                src="https://cdn.lordicon.com/rlizirgt.json"
                                trigger="hover"
                                style={{width:'25px',height:'25px'}}>
                            </lord-icon>
                            <lord-icon className='cursor-pointer' onClick={notified}
                                src="https://cdn.lordicon.com/msetysan.json"
                                trigger="hover"
                                style={{width:'25px',height:'25px'}}>
                            </lord-icon>
                            <lord-icon className='cursor-pointer' onClick={profileclick}
                                src="https://cdn.lordicon.com/hbvyhtse.json"
                                trigger="hover"
                                style={{width:'25px',height:'25px'}}>
                            </lord-icon>
                        </div>
                        <div className='w-4/6 h-60 rounded-lg flex items-center justify-center' style={{backgroundColor:'white'}}>
                            <div className='w-3/5 h-full rounded-lg flex items-center justify-center flex-col'>
                                <div className='w-auto h-auto '>
                                    <h1 className='text-2xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h2 className='text-sm font-sans font-bold text-gray-700'>We Need A FullStack Developer</h2>
                                </div>
                                <div className='w-4/5 h-1/2'></div>
                                <div className='h-auto flex gap-4 items-center justify-center' style={{width:'90%'}}>
                                    <button className='w-1/2 h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105'>APPLY</button>
                                    <button className='w-1/2 h-10 bg-gray-900 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105'>LEARN MORE</button>
                                </div>
                            </div>
                            <div className='w-2/5 h-full rounded-lg p-1'>
                                <img src={fsd} alt='pic' className='h-full rounded-lg'/>
                            </div>  
                        </div>
                        <div className='rounded-lg flex items-center justify-center flex-col gap-1' style={{width:'95%',height:'52%',backgroundColor:'lavender'}}>
                            <div className='h-auto flex items-center justify-start gap-2 cursor-pointer' style={{width:'95%'}}>
                                <h1 className='text-base font-sans font-bold'>Jobs Available</h1>
                                <h1 className='w-3/4'>&nbsp;</h1>
                                <h1 className='text-base font-sans font-bold hover:text-blue-700' onClick={jobnavclick}>See All</h1>
                            </div>
                            <div  className='rounded-lg flex items-center justify-center flex-row gap-2' style={{width:'95%',height:'90%'}}>
                                <div className='bg-white rounded-lg p-1' style={{width:'31.666%',height:'97%'}}>
                                    <img src={fsdc} alt='pic' className='h-2/5 w-full rounded-tl-lg rounded-tr-lg'/>
                                    <div className='w-full h-2/5 flex flex-col gap-1 p-1 bg-white'>
                                        <h1 className='text-lg font-sans font-extrabold text-left ml-3 text-gray-900'>FULLSTACK DEVELOPER</h1>
                                        <h1 className='text-sm font-sans font-bold ml-2 text-gray-700'>Aither Technology is looking for talented software developers</h1>
                                    </div>
                                    <div className='w-full h-1/5 rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-3'>
                                     {isChecked ? (
                                        <lord-icon onClick={checkclick}
                                            src="https://cdn.lordicon.com/gigfpovs.json"
                                            trigger="hover"
                                            style={{width:'25px',height:'25px'}}>
                                        </lord-icon>
                                    ) : (
                                        <lord-icon onClick={checkclickfalse}
                                            src="https://cdn.lordicon.com/eanmttmw.json"
                                            trigger="hover"
                                            style={{width:'25px',height:'25px'}}>
                                        </lord-icon>
                                    )}   
                                    <lord-icon
                                        src="https://cdn.lordicon.com/uvqnvwbl.json"
                                        trigger="hover"
                                        style={{width:'25px',height:'25px'}}>
                                    </lord-icon>
                                    <button className='p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105' style={{width:'45%'}}>APPLY</button>
                                    </div>
                                </div>
                                <div className='bg-white rounded-lg p-1' style={{width:'31.666%',height:'97%'}}>
                                    <img src={fsdc} alt='pic' className='h-2/5 w-full rounded-tl-lg rounded-tr-lg'/>
                                    <div className='w-full h-2/5 flex flex-col gap-1 p-1 bg-white'>
                                        <h1 className='text-xl font-sans font-extrabold text-left ml-3 text-gray-900'>FULLSTACK DEVELOPER</h1>
                                        <h1 className='text-sm font-sans font-bold ml-2 text-gray-700'>Aither Technology is looking for talented software developers</h1>
                                    </div>
                                    <div className='w-full h-1/5 rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-3'>
                                     {isChecked ? (
                                        <lord-icon onClick={checkclick}
                                            src="https://cdn.lordicon.com/gigfpovs.json"
                                            trigger="hover"
                                            style={{width:'25px',height:'25px'}}>
                                        </lord-icon>
                                    ) : (
                                        <lord-icon onClick={checkclickfalse}
                                            src="https://cdn.lordicon.com/eanmttmw.json"
                                            trigger="hover"
                                            style={{width:'25px',height:'25px'}}>
                                        </lord-icon>
                                    )}   
                                    <lord-icon
                                        src="https://cdn.lordicon.com/uvqnvwbl.json"
                                        trigger="hover"
                                        style={{width:'25px',height:'25px'}}>
                                    </lord-icon>
                                    <button className='p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105' style={{width:'45%'}}>APPLY</button>
                                    </div>
                                </div>
                                <div className='bg-white rounded-lg p-1' style={{width:'31.666%',height:'97%'}}>
                                    <img src={fsdc} alt='pic' className='h-2/5 w-full rounded-tl-lg rounded-tr-lg'/>
                                    <div className='w-full h-2/5 flex flex-col gap-1 p-1 bg-white'>
                                        <h1 className='text-xl font-sans font-extrabold text-left ml-3 text-gray-900'>FULLSTACK DEVELOPER</h1>
                                        <h1 className='text-sm font-sans font-bold ml-2 text-gray-700'>Aither Technology is looking for talented software developers</h1>
                                    </div>
                                    <div className='w-full h-1/5 rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-3'>
                                     {isChecked ? (
                                        <lord-icon onClick={checkclick}
                                            src="https://cdn.lordicon.com/gigfpovs.json"
                                            trigger="hover"
                                            style={{width:'25px',height:'25px'}}>
                                        </lord-icon>
                                    ) : (
                                        <lord-icon onClick={checkclickfalse}
                                            src="https://cdn.lordicon.com/eanmttmw.json"
                                            trigger="hover"
                                            style={{width:'25px',height:'25px'}}>
                                        </lord-icon>
                                    )}   
                                    <lord-icon
                                        src="https://cdn.lordicon.com/uvqnvwbl.json"
                                        trigger="hover"
                                        style={{width:'25px',height:'25px'}}>
                                    </lord-icon>
                                    <button className='p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105' style={{width:'45%'}}>APPLY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white flex items-center justify-center rounded-tr-lg rounded-br-lg' style={{width:'24%',height:'97vh'}}>
                    {IsNotified ? (
                        <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'90%',height:'93vh',backgroundColor:'#fffff0'}}>
                            <img src={fsdc} alt='pic' className='h-2/6'/>
                            <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                            </div>
                            <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                    <li>React : 1 year (Required)</li>
                                    <li>Bachelor's (Preffered)</li>
                                    <li>Node Js : 1 year (Preffered)</li>
                                    <li>Cloud Computing : 1 year (Preffered)</li>
                                    <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                </ul>
                            </div>
                            <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                <button className='h-10 bg-gray-900 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'50%'}}>LEARN MORE</button>
                                <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'45%'}}>APPLY</button>
                            </div>
                        </div>
                        ) : (
                            <div className='shadow-md flex items-center flex-col gap-2 rounded-lg' style={{width:'90%',height:'93vh',backgroundColor:'aliceblue'}}>
                                <div className='w-full h-auto text-center'>
                                    <h1 className='font-sans font-bold text-neutral-900 mt-7' style={{fontSize:'1rem'}}>Notifications</h1>
                                </div>
                                <div className='notifiedground w-full mt-2 border-gray-600 flex items-center flex-col gap-4' style={{height:'80%',overflow:'scroll'}}>
                                    <JobAlertList />
                                </div>
                                <div className='w-full rounded-bl-lg rounded-br -lg flex items-center justify-center gap-2' style={{height:'10%'}}>
                                <button onClick={notifiedtrue} className='h-10 shadow-md bg-gray-900 p-1 text-sm font-sans font-semibold tracking-wide text-white pl-2 pr-2 rounded-lg hover:scale-105' style={{width:'90%'}}>Close</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;