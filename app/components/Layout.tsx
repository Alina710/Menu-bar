const Layout = () => {
  return (
<div className="container mx-auto p-4">
      
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="bg-blue-500 p-4 text-white">
  <h2 className="text-2xl">First Section</h2>
          <p>This section takes full width on small screens and half-width on medium and larger screens.</p>
        </div>

       
      <div className="bg-green-500 p-4 text-white">
          <h2 className="text-2xl">Second Section</h2>
             <p>This section takes half width on medium and larger screens.</p>
        </div>

       
 <div className="bg-red-500 p-4 text-white">
          <h2 className="text-2xl">Third Section</h2>
                  <p>This section takes half width on medium and larger screens.</p>
        </div>
          </div>
       </div>
  );
};

export default Layout;
