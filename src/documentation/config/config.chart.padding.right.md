#### **right** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The amount of whitespace (padding), in pixels, between the right edge of any visualizations in this Contour instance (for example, the labels or axis titles) and the inner plot area (for example, the axes).

**Example:**

    new Contour({
        el: '.myChart',
        chart: { padding: { right: 50 } }
      })
    .cartesian()
    .line(data)
    .render()

*[Try it.](<%= jsFiddleLink %>)*

<% if(notes) { %><%= notes %><% } %>

