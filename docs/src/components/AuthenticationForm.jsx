// EXPORTING THE AUTHENTICATION FORM
export default function AuthenticationForm(props){
    return (
        <div 
            id="form"
            className="flex flex-col md:flex-row md:items-center gap-[60px] md:justify-around"
        >
            <div id="username-field">
                <p>Username</p>
                
                <input
                    type="text"
                    name="username"
                    required
                    autoComplete="on"
                    placeholder="Your username here"
                    value={props.formData.username}
                    onChange={props.handleChange}
                    className=" dark:rounded-[4px] dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                    style={props.styles.input}
                />
            </div>

            <div id="email-field">
                <p>Email</p>
                
                <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Your email here"
                    value={props.formData.email}
                    onChange={props.handleChange}
                    className="dark:rounded-[4px] dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                    style={props.styles.input}
                />
            </div>

            <div id="password-field">
                <p>Password</p>
                
                <input 
                    type="password" 
                    name="password" 
                    required
                    value={props.formData.password}
                    onChange={props.handleChange}
                    placeholder="Your password here"
                    className="dark:rounded-[4px] dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                    style={props.styles.input}
                />
            </div>
        </div>
    )
}