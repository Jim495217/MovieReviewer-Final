import {render} from "@testing-library/react";
import {AuthProvider} from "../context/AuthContext";

test("Auth context renders",()=>{

render(
<AuthProvider>
<div>Test</div>
</AuthProvider>
);

});