import './Input.css';

function Input({ id="text", type="text", value="", action=null, label="input field", required }) {
    return (
        <>
            <div className="text-field">
                <input type={type} 
                id={id} 
                name={id} 
                placeholder="" 
                value={value} 
                onChange={action}
                required={required}
                />
                <label for={id}>{label}</label>
            </div>
        </>
    );
}

export default Input;