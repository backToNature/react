var Header = React.createClass({
    render: function () {
        return (
            <header className="header">
                <h1>账单查看</h1>
            </header>
        );
    }
});
React.render(
    <Header />,
    document.getElementById('content')
);