


                    function validate()
                    {
                      var name = document.forms["myform"]["fname"]; 
                      var email = document.forms["myform"]["email"];  
                      var mobile = document.forms["myform"]["mobile"];   
                      var adults = document.forms["myform"]["adults"];  
                      var children = document.forms["myform"]["children"];  
                      var cin = document.forms["myform"]["cin"];  
                      var cout = document.forms["myform"]["cout"]; 
                    
                      if (name.value == " ")                                  
                            { 
                                window.alert("Please enter your name."); 
                                name.focus(); 
                                return false; 
                            } 
                    



                    if (email.value == " ")                                  
                            { 
                                window.alert("Please enter your email."); 
                                name.focus(); 
                                return false; 
                            } 
                    



                    if (mobile.value == " ")                                  
                            { 
                                window.alert("Please enter your mobile."); 
                                name.focus(); 
                                return false; 
                            } 
                    



                    if (adults.value == " ")                                  
                            { 
                                window.alert("specify no. of adults"); 
                                name.focus(); 
                                return false; 
                            } 
                    


                    if (children.value == " ")                                  
                            { 
                                window.alert("specify no. of children"); 
                                name.focus(); 
                                return false; 
                            } 
                    


                    if (cin.value == " ")                                  
                            { 
                                window.alert("select check-in date"); 
                                name.focus(); 
                                return false; 
                            } 
                    


                    if (cout.value == " ")                                  
                            { 
                                window.alert("selct c-out date"); 
                                name.focus(); 
                                return false; 
                            } 
                    
                        


                   return true;

                        }
                  