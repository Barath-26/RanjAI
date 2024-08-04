import './DashboardPage.css';
import { useAuth } from '@clerk/clerk-react';

const DashboardPage = () => {
    const { userId } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) return;
        try {
            const response = await fetch("http://localhost:3000/api/chats", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId, text }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Chat saved successfully');
        } catch (error) {
            console.error('Error submitting chat:', error);
        }
    };

    return (
        <div className='dashboardpage'>
            <div className='texts'>
                <div className='logo'>
                    <img src='/Logo.png' alt='Logo'/>
                    <h1>RANJ AI</h1>
                </div>
                <div className='options'>
                    <div className='option'>
                        <img src='/chat.png' alt='Chat Icon'/>
                        <span>Create a new chat</span>
                    </div>
                    <div className='option'>
                        <img src='/image.png' alt='Image Icon'/>
                        <span>Analyze images</span>
                    </div>
                    <div className='option'>
                        <img src='/code.png' alt='Code Icon'/>
                        <span>Help me with my code</span>
                    </div>
                </div>
            </div>
            <div className='formcontainer'>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='text' placeholder='Ask me anything...' required />
                    <button>
                        <img src='/arrow.png' alt='' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DashboardPage;
