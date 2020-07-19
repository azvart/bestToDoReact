import React, {useState, useRef,useEffect} from 'react';
import {TweenMax, Linear} from 'gsap';
import { Layout, Menu, Breadcrumb, Input,Modal, Button  } from 'antd';
import logo from '../img/todo.png';


import {addCategory,addSubCategory} from '../store/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Main =(props)=>{
    const {addCategory,addSubCategory, state,data} = props;

    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    const {Search} = Input;

    const[col,setCol]=useState({
        collapsed:false
    });
    const[values,setValues] = useState();
    const[modal,setModal] = useState({
        visible:false
    });


    //Модалка
    const showModal = () =>{
        setModal({
            visible:true,
        });
    };
    const handleOk = (e) =>{
        setModal({
            visible:false
        });
    };

    const handleCancel = (e) =>{
        setModal({
            visible:false
        });
    }





    const onCollapsed =(collapsed)=>{
        setCol({collapsed});
    };
    // Анимация заголовка
    let logoElment = useRef(null);
    useEffect(()=>{
        TweenMax.to(
            logoElment,
            1,
            {
                repeat:-1,
                color:'#6ec6ff',
                ease:Linear.easeNone
            } )},[]);
    const scaleUp =()=>{
        TweenMax.to(logoElment,1,{
            scale: 1.05,
            ease: Linear.ease
        });
    }
    const scaleDown = ()=>{
        TweenMax.to(logoElment,1,{
            scale:0.75
        });
    }



    return(
      <>
            <Layout style={{minHeight:'100vh'}}>
                <Sider collapsible 
                collapsed={col.collapsed} 
                onCollapse={onCollapsed}>
                    <div className='logo' style={{marginBottom: '10px'}} >
                        <img src={logo} alt=""  />
                    </div>
                    <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                        <Menu.Item key="1">
                            <Input 
                            placeholder="Write new Category"
                            value={values}
                            onChange={(e)=>setValues(e.target.value)}
                            onPressEnter={()=>addCategory([values])}
                            />
                        </Menu.Item>
                    
                            {/* {state.map((e)=><SubMenu title={e.content}></SubMenu>)} */}
                     
                          {/* {<SubMenu title={data.category.content}>
                              <SubMenu title={data.category.subCategory.content}>
                                  <Menu.Item>
                                      {data.category.subCategory.task.content}
                                  </Menu.Item>
                              </SubMenu>
                              </SubMenu>} */}
                            
                            {data.data.category.content.map((e)=><SubMenu title={e}>
                                {data.data.category.subCategory.content.map((t)=><SubMenu title={t}>
                                    {data.data.category.subCategory.task.content.map((r)=><Menu.Item>
                                        {r}
                                    </Menu.Item>)}
                                </SubMenu>)}
                            </SubMenu>)}
                         
                    </Menu>
                </Sider>
                
                <Layout className="site-layout">
                    <Header className="site-layout-background" 
                    style={{ padding: 0,color:'white',textAlign:'center'}} >
                        <h1 style={{color:'white'}} 
                        onMouseEnter={scaleUp} 
                        onMouseLeave={scaleDown} 
                        ref={element=>{logoElment=element}}>Mamka progaet ToDo</h1>
                        </Header>
                    {/* {<Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {data.category.subCategory.task.content}
                        </div>
                       
                    </Content>} */}
                </Layout>
            </Layout>
      </>
    )
}


const mapStateToProps=(state)=>{
    console.log(state);
        return {
            data:{...state}
            
};
}
const mapDispatchToProps=(dispatch)=>{
   return{ addCategory: bindActionCreators(addCategory,dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);